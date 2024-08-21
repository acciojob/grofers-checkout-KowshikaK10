const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.querySelector('table');
  const prices=table.querySelectorAll('.price');
  let total=0;
prices.forEach(priceElement => {
        const priceValue = parseFloat(priceElement.textContent.trim());
        total += priceValue;
    });
	const tr = document.createElement("tr");
	const td = document.createElement("td");
	td.append(`Total Price = ${total}`);
	tr.appendChild(td);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

