## Exercise:
1. Open a terminal in Linux.
2. Use `mkdir` to create the following directory structure:
   ```
   projects/
       project1/
       project2/
   ```
   Use the `-p` option to create both parent and child directories in a single command.
   ```bash
   mkdir -p projects/project1 projects/project2
   ```

3. Use `touch` to create three files (`file1.txt`, `file2.txt`, `file3.txt`) inside the `project1` directory.
   ```bash
   touch projects/project1/file1.txt projects/project1/file2.txt projects/project1/file3.txt
   ```

4. Verify your work by listing the contents of the `projects` directory:
   ```bash
   ls -R projects/
   ```

---
