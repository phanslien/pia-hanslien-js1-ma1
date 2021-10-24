const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1
const cat = {
    complain: function () {
        let complain = "Meow."
        console.log("Meow.");
    }
};

cat.complain();

//question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");


// Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";

// Question 7
function printListItems(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printListItems(cats);

//Question 8
function createCats(cats) {
    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let ageOfCat = "Age uknown";

        if (cats[i].age) {
            ageOfCat = cats[i].age;
        }
        html += `<div><h5>Name: ${cats[i].name}</h5></div>
                    <div><p>Age: ${ageOfCat}</p></div>`;
    }
    return html;
}
createCats(cats);

const catContent = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catContent;
