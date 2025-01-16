## Exercise:
1. Create a Directory Structure:
- Create two directories, dir1 and dir2.

2. Move a File:
- Create a file example.txt in dir1 and then move it to dir2.

3. Rename a File:
- Rename the file example.txt to new_example.txt within dir2.

4. To Verify:
- Check the contents of dir2 to ensure the file has been moved and renamed.


---

1. **Create a Directory Structure:**
   - Create two directories, `dir1` and `dir2`.
   ```bash
   mkdir dir1 dir2
   ```

2. **Move a File:**
   - Create a file `example.txt` in `dir1` and then move it to `dir2`.
   ```bash
   touch dir1/example.txt
   mv dir1/example.txt dir2/
   ```

3. **Rename a File:**
   - Rename the file `example.txt` to `new_example.txt` within `dir2`.
   ```bash
   mv dir2/example.txt dir2/new_example.txt
   ```

4. **To Verify**
   - Check the contents of `dir2` to ensure the file has been moved and renamed.
   ```bash
   ls dir2
   ```

---

