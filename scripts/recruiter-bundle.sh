#!/usr/bin/env bash
# Pack or unpack the private recruiter content (company page JSON + public/p images)
# into content/recruiter-private.enc, an encrypted file that's safe to commit.
#
#   scripts/recruiter-bundle.sh pack     # after editing content; then commit the .enc file
#   scripts/recruiter-bundle.sh unpack   # used by CI (or a fresh clone)
#
# The key comes from $RECRUITER_KEY, or the gitignored .recruiter-key file locally.
set -euo pipefail
cd "$(dirname "$0")/.."

bundle=content/recruiter-private.enc
export RECRUITER_KEY="${RECRUITER_KEY:-$(cat .recruiter-key 2>/dev/null || true)}"
if [ -z "$RECRUITER_KEY" ]; then
  echo "No key: set RECRUITER_KEY or create .recruiter-key" >&2
  exit 1
fi

case "${1:-}" in
  pack)
    tar -czf - content/recruiter-pages.json public/p |
      openssl enc -aes-256-cbc -pbkdf2 -iter 200000 -salt -pass env:RECRUITER_KEY -out "$bundle"
    echo "Wrote $bundle"
    ;;
  unpack)
    openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -pass env:RECRUITER_KEY -in "$bundle" | tar -xzf -
    echo "Unpacked private recruiter content"
    ;;
  *)
    echo "usage: $0 pack|unpack" >&2
    exit 1
    ;;
esac
