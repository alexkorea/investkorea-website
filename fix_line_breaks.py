#!/usr/bin/env python3
"""
Fix Korean blog posts to add line breaks after periods and question marks.
Each sentence should be on its own line.
"""

import re
import glob
import os

BLOG_DIR = "/Users/chloe/investkorea-project/content/blog"

def get_korean_md_files(blog_dir):
    """Get all .md files that are NOT locale-suffixed (.en.md, .zh.md, .ja.md)."""
    all_md = glob.glob(os.path.join(blog_dir, "*.md"))
    korean = [f for f in all_md if not re.search(r'\.(en|zh|ja)\.md$', f)]
    return sorted(korean)

def should_skip_line(line):
    """Check if a line should be skipped (not split)."""
    stripped = line.strip()
    if not stripped:
        return True
    if stripped.startswith('|'):  # table row
        return True
    if stripped.startswith('#'):  # heading
        return True
    if re.match(r'^[-*]\s', stripped):  # unordered list
        return True
    if re.match(r'^\d+\.\s', stripped):  # ordered list
        return True
    if stripped.startswith('>'):  # blockquote
        return True
    if stripped.startswith('!'):  # image
        return True
    if stripped.startswith('---'):  # frontmatter delimiter or hr
        return True
    # Link-only lines: just a markdown link or bare URL
    if re.match(r'^\[.*\]\(.*\)$', stripped):
        return True
    if re.match(r'^https?://', stripped):
        return True
    # Emoji-prefixed special lines (tips, warnings) - don't skip these, they have sentences
    return False

def split_sentences(line):
    """Split a paragraph line at sentence boundaries (. or ?) followed by space."""
    # Strategy: walk through the line character by character, tracking context,
    # and decide where to split.

    result_parts = []
    i = 0
    current = []
    length = len(line)

    while i < length:
        ch = line[i]

        # Check for URLs - don't split inside them
        if i + 4 <= length and line[i:i+4] in ('http', 'ftp:'):
            # Find the URL pattern
            url_match = re.match(r'https?://\S+', line[i:])
            if url_match:
                current.append(url_match.group(0))
                i += len(url_match.group(0))
                continue

        # Check for ellipsis: ...
        if ch == '.' and i + 2 < length and line[i+1] == '.' and line[i+2] == '.':
            # Consume all consecutive dots
            dots_start = i
            while i < length and line[i] == '.':
                i += 1
            current.append(line[dots_start:i])
            continue

        # Check for period or question mark followed by space
        if ch in '.?' and i + 1 < length and line[i + 1] == ' ':
            # Don't split if this is a decimal number: digit.digit
            if ch == '.' and i > 0 and line[i-1].isdigit() and i + 2 < length and line[i+2].isdigit():
                current.append(ch)
                i += 1
                continue

            # Don't split inside parentheses or quotes
            preceding = ''.join(current)
            open_parens = preceding.count('(') - preceding.count(')')
            open_quotes = preceding.count('"') % 2  # odd means we're inside quotes
            open_sq = preceding.count("'") % 2
            # Korean quotes
            open_kq1 = preceding.count('「') - preceding.count('」')
            open_kq2 = preceding.count('『') - preceding.count('』')

            if open_parens > 0 or open_quotes > 0 or open_kq1 > 0 or open_kq2 > 0:
                current.append(ch)
                i += 1
                continue

            # Don't split common abbreviations
            if ch == '.':
                # Check for patterns like "e.g. ", "etc. ", "i.e. "
                abbrev_match = re.search(r'(?:^|[^a-zA-Z])([a-zA-Z])\.$', ''.join(current) + '.')
                if abbrev_match:
                    # Single letter followed by dot - likely abbreviation part
                    # But let's be more specific
                    tail = ''.join(current)
                    if re.search(r'(?:e\.g|i\.e|etc|vs|a\.k\.a|p\.m|a\.m|no|No|Mr|Mrs|Dr|St)$', tail + ch):
                        current.append(ch)
                        i += 1
                        continue

            # Don't split file extensions: .pdf, .jpg, .hwp, etc followed by space
            if ch == '.':
                tail = ''.join(current)
                if re.search(r'\.(pdf|jpg|jpeg|png|gif|doc|docx|xls|xlsx|hwp|zip|txt|csv|xml|html)$', tail + ch, re.IGNORECASE):
                    current.append(ch)
                    i += 1
                    continue

            # This is a valid split point
            current.append(ch)
            result_parts.append(''.join(current).rstrip())
            current = []
            i += 2  # skip the period/question and the space
            continue

        current.append(ch)
        i += 1

    # Add remaining text
    if current:
        result_parts.append(''.join(current).rstrip())

    return result_parts

def process_file(filepath):
    """Process a single markdown file. Returns (was_modified, lines_split_count)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    in_frontmatter = False
    frontmatter_count = 0
    total_splits = 0

    for line in lines:
        stripped = line.strip()

        # Track frontmatter
        if stripped == '---':
            frontmatter_count += 1
            if frontmatter_count == 1:
                in_frontmatter = True
            elif frontmatter_count == 2:
                in_frontmatter = False
            new_lines.append(line)
            continue

        if in_frontmatter:
            new_lines.append(line)
            continue

        if should_skip_line(line):
            new_lines.append(line)
            continue

        # Check if the line actually has a split candidate
        if not re.search(r'[.?] ', line):
            new_lines.append(line)
            continue

        # Split the line
        parts = split_sentences(line)

        if len(parts) > 1:
            total_splits += len(parts) - 1
            new_lines.extend(parts)
        else:
            new_lines.append(line)

    new_content = '\n'.join(new_lines)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, total_splits

    return False, 0

def main():
    files = get_korean_md_files(BLOG_DIR)
    print(f"Found {len(files)} Korean .md files")

    total_modified = 0
    total_splits = 0

    for filepath in files:
        fname = os.path.basename(filepath)
        modified, splits = process_file(filepath)
        if modified:
            total_modified += 1
            total_splits += splits
            print(f"  Modified: {fname} ({splits} splits)")
        else:
            print(f"  Skipped (no changes): {fname}")

    print(f"\nSummary: {total_modified} files modified, {total_splits} total lines split")

if __name__ == '__main__':
    main()
