let container =document.createElement("div");
container.setAttribute("class","container");

let row = document.createElement("div");
row.setAttribute("class","row");

container.append(row);
getNames();
async function getNames()
{
    try{
        let res = await fetch("https://www.abibliadigital.com.br/api/books");
        let data = await res.json();
        displayData(data);
    }
    catch(error){console.log(error)}
}


function displayData(data)
{
    for(let i=0;i<data.length;i++)
    {
        console.log(data[i].name);
        row.innerHTML+=
            `<div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-success">Name:${data[i].name}</div>
            <div class="card-body text-success">
              <h5 class="card-title">Author:${data[i].author}</h5>
              <h5 class="card-title">Chapters:${data[i].chapters}</h5>
            </div>
            <div class="card-footer bg-transparent border-success">Testament:${data[i].testament}</div>
          </div>`
        }
    }
    document.body.append(container);
