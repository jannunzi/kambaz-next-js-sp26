export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <label>
        <input type="radio" name="radio-genre" />
        Comedy
      </label>
      <br />
      <input id="wd-radio-drama" type="radio" name="radio-genre" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input id="wd-radio-scifi" type="radio" name="radio-genre" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input id="wd-radio-fantasy" type="radio" name="radio-genre" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <br />
      <label>Marital Status</label>
      <br />
      <label>
        <input type="radio" name="radio-marital-status" />
        Single
      </label>
      <br />
      <input type="radio" name="radio-marital-status" /> Married
      <br />
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input id="wd-chkbox-comedy" type="checkbox" name="check-genre" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input id="wd-chkbox-drama" type="checkbox" name="check-genre" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input id="wd-chkbox-scifi" type="checkbox" name="check-genre" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input id="wd-chkbox-fantasy" type="checkbox" name="check-genre" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      <h5>Text boxes</h5>
      <label>Biography:</label>
      <br />
      <textarea id="wd-textarea" cols={30} rows={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </textarea>
    </div>
  );
}
