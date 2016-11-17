#Command Line for Web Developers Part 2 Project 1

```bash

#! /bin/bash
pattern="Section"
for _dir in *"${pattern}"*; do
    [ -d "${_dir}" ]  -execdir mv dir="*Chapter*" && break
done
echo "${dir}"

```