#!/usr/bin/env sh

# @shellcheck
# Lints all files in the specified folders using shellcheck.
#
# Usage: @shellcheck FOLDERS...

EXCLUDE_PATHS="node_modules"

dir=$(dirname "$0")
bin="$dir/../node_modules/.bin/shellcheck"
includes="$*"

warning() {
  printf "\n\033[1;43m SHELLCHECK \033[0m %b\n\n" "$1"
}
error_and_usage() {
  if [ -n "$1" ]; then
    printf "\033[1;41m SHELLCHECK \033[0m \033[1;31m%b\033[0m\n" "$1"
  fi
  printf "Usage: shellcheck FOLDERS...\n"
  exit 1
}

if [ -z "$includes" ]; then
  error_and_usage "No paths specified"
fi

exit=0

for folder in $includes; do
  [ ! -d "$folder" ] && error_and_usage "The folder $dir/$folder doesn't exist"

  sh_files=$(git ls-files --others --exclude-standard --cached | grep -E "^$folder" | grep -v "$EXCLUDE_PATHS" | tr "\n" " ")

  if [ -z "$sh_files" ]; then
    warning "No files found in $folder"
    continue
  fi
  
  for file in $sh_files; do
    ! $bin "$file" && exit=1
  done
done

exit "$exit"
