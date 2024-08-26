---
sidebar_position: 1
---

# Installation

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```kvexium title="src/kvex/example.kvex"
**dec start: i8 = 15;
*dec;
&dec;
^dec;
dec;

#Main {
	@NodeName
	
	dec x: i8;
	x := 9;
	x--;

	if (x > 5) {                                                       // if x is bigger than 5 then ...
		print("'x' ({x}) is bigger than 5")
		} : {                                                          // else ...
		print("'x' ({x}) isn't bigger than 5")
	}

	for (i: i8 = 0; i <= 8, i++) {                                     // normal for loop
		print("i ({i}) is smaller or equal to 8\n")
	}

	dec b[]: i16[x] := {1,5};                                          // creates an array 'b' with a specific specified amount 'x >> 8' of specified types 'i16'

	for (i: i8 :: b) {                                                 // for each loop
		print("item ({i}) is in the array named 'b'\n")
	}

	dec t: i8 = 0;

	while (t.isBetween(0, 5)) {                                        // normal while loop (when no expression (b => if true; !b => if false))
		print("t = {t}")
		t++;
	}

	dec z: ntype = (x == 3) ? (x + 1) : (x - 1);

	dec getValueAt(arr: [], i: ntype) -> i16 {
		arr[i].value                                                   // return the value of the element at index 'i' of the given array 'arr'
	};

	dec getValueError(arr: [], i: ntype) -> i16 ?> Error {
		arr[i].value                                                   // return the value of the element at index 'i' of the given array 'arr'
	} : {
		new Error("Cannot find value at index {i}!", Error.Critical);  // or throw an error
	};

	dec y: i16 = getValueAt(b, 1);                                     // 'y' will be the 2nd value ('5') of the array 'b'

	switch (y) {
		(?? < 5) => {                                                  // '??' gets the switch value (in this case 'y')
			print("smaller than 5");
		},
		(?? >= 5) => {
			print("bigger or equal to 5");
		},
		_ => {
			print("value is not a number");
		}
	}
}
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
