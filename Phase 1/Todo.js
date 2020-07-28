let items = document.getElementById('input-item');
let button = document.getElementById('addButton');
let ul = document.getElementById('items');
let Selected = document.getElementById('SelectedItems');

function newItem() {

	if (items.value === "") {
		document.getElementById("audio").play();
		alert("Please enter some items Name!");

	} else {
		let li = document.createElement('li');
		let ListCheckbox = document.createElement('input');
		let label = document.createElement('label');
		let deleteButton = document.createElement('button');
		ListCheckbox.type = 'Checkbox';
		label.innerText = items.value;
		deleteButton.innerText = "Delete";
		document.getElementById("audio1").play();
		li.appendChild(ListCheckbox);
		li.appendChild(label);
		li.appendChild(deleteButton);

		function deleteItem() {
			let liItem = this.parentElement;
			ul.removeChild(liItem);
		}

		function Clr() {
			let text = this.parentElement;
			text.style.color = '#8B0000';
		}


		function checkedItem() {
			ListCheckbox = document.querySelector("input[name = Checkbox]");
			if (this.checked) {
				let text = this.parentElement;
				text.style.textDecoration = 'line-through';
				text.style.color = '#008000';
				Selected.appendChild(text);

				function deleteItem() {
					let liItem = this.parentElement;
					Selected.removeChild(liItem);
				}

				function Clr() {
					let text = this.parentElement;
					text.style.color = '#8B0000';
				}
				deleteButton.addEventListener('click', Clr);
				deleteButton.addEventListener('dblclick', deleteItem);


			} else {
				let text = this.parentElement;
				text.style.textDecoration = 'none';
				text.style.color = '#000000';
				Selected.removeChild(text);

				ul.appendChild(li);

			}
		}
		ListCheckbox.addEventListener('change', checkedItem);

		deleteButton.addEventListener('click', Clr);
		deleteButton.addEventListener('dblclick', deleteItem);
		ul.appendChild(li);

	}
}

button.addEventListener("click", newItem);