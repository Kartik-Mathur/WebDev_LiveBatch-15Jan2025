### `ls` Command - List Files and Directories

The `ls` (list) command is used to display the files and directories in the specified location. By default, it lists the contents of the current directory.

### Syntax:
```
ls [options] [directory_name]
```

### Common Options:
- **`-l`**: Lists files in long format, showing permissions, owner, group, size, and modification date.
- **`-a`**: Includes hidden files (those starting with a dot `.`).
- **`-h`**: Makes the file sizes human-readable (e.g., in KB, MB).
- **`-R`**: Recursively lists the contents of subdirectories.

### Example:
```bash
ls
```
This command lists the files and directories in the current directory.

To list all files including hidden ones:
```bash
ls -a
```

To get detailed information about files:
```bash
ls -l
```

To list files recursively:
```bash
ls -R
```

### Use Case:
The `ls` command is essential for viewing the contents of a directory and checking for specific files. 