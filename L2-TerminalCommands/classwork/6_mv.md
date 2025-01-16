## 2. `mv` Command - Move or Rename Files and Directories

The `mv` command is used to **move or rename files and directories** in Linux.

### Syntax:
```
mv [source] [destination]
```

### Common Uses:

- Rename a file:
  ```bash
  mv old_filename.txt new_filename.txt
  ```
  This renames the file `old_filename.txt` to `new_filename.txt`.

- Move a file to a different directory:
  ```bash
  mv file.txt /home/user/Documents/
  ```
  This moves `file.txt` to the `/home/user/Documents/` directory.

- Move and rename a file in one step:
  ```bash
  mv file.txt /home/user/Documents/newfile.txt
  ```
  This moves `file.txt` to the `Documents` directory and renames it as `newfile.txt`.

- Move multiple files to a directory:
  ```bash
  mv file1.txt file2.txt /home/user/Documents/
  ```
  This moves `file1.txt` and `file2.txt` to the `/home/user/Documents/` directory.

### Important Note:
- **Overwriting Files**: If a file with the same name exists in the destination, it will be **overwritten** without a prompt, unless the `-i` (interactive) option is used.
- **Interactive Mode**: Use the `-i` option to get a prompt before overwriting a file.
  ```bash
  mv -i file.txt /home/user/Documents/
  ```

---