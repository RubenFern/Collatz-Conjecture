function calculate()
{
    let value: number = parseInt(( <HTMLInputElement>document.getElementById("number")).value );

    if ( value <= 0 || !Number.isInteger(value) || (<HTMLInputElement>document.getElementById("number")).value.length > 20 )
    {
        showAlert();
                
        return;
    }

    const container = document.getElementById("sandbox");
    
    if ( container != null )
        container.innerHTML = "";

    addNumber(value);

    let i: number = 1;

    while ( value != 1 )
    {
        if ( value % 2 == 0 )
            value = parseInt( (value / 2).toString() );
        else
            value = parseInt( (3 * value + 1).toString() );

        addArrow(i)
        addNumber(value);

        i++;
    }
}

function clearContainer()
{
    const container = document.getElementById("sandbox");

    if ( container == null )
        return;

    container.innerHTML = "";

    const textField = document.getElementById("number") as HTMLInputElement;

    if ( textField == null )
    return;

    textField.value = "";
    textField.focus();
}

function addNumber(v: number)
{
    const container = document.getElementById("sandbox");

    if ( container == null )
        return;
    
    const divNumber = document.createElement("div");

    divNumber.setAttribute("id", "nextNumber");
    divNumber.textContent = v.toString();

    chechSizeNumber(v, divNumber);

    setTimeout(() => 
    {
        divNumber.style.opacity = "1";
    }, 100);

    container.appendChild(divNumber);
}

function addArrow(v: number)
{
    let container = document.getElementById("sandbox");

    if ( container == null )
        return;

    const divContainer = document.createElement("div");
    divContainer.setAttribute("id", `divArrow${v}`);
    divContainer.textContent = "";

    container.appendChild(divContainer);

    container = document.getElementById(`divArrow${v}`);

    if ( container == null )
        return;

    const imgArrow = document.createElement("i");
    imgArrow.setAttribute("class", "bi bi-arrow-right");

    setTimeout(() => 
    {
        imgArrow.style.opacity = "1";
    }, 100);

    container.appendChild(imgArrow);
}

function chechSizeNumber(v: number, container: any)
{
    const lengthNumber: number = v.toString().length;

    // Foreground
    if ( lengthNumber >= 6 && lengthNumber < 8 )
        container.style.fontSize = "30px";

    else if ( lengthNumber >= 8 && lengthNumber < 12)
        container.style.fontSize = "20px";

    else if ( lengthNumber >= 12 ) 
        container.style.fontSize = "15px";
        
    else
        container.style.fontSize = "40px";

    // Back
    if ( lengthNumber >= 15 )
    {
        container.style.minWidth = "160px";
        container.style.minHeight = "160px";
    }
    else
    {
        container.style.minWidth = "120px";
        container.style.minHeight = "120px";
    }
}

function showAlert()
{
    const container = document.getElementById("input_number");
    
    if ( container == null )
        return;

    const divAlert = document.createElement("div");

    divAlert.setAttribute("class", "alert alert-danger alert-dismissible fixed-top w-25 text-center m-auto mt-4");
    divAlert.setAttribute("role", "alert");
    divAlert.textContent = "El número no es válido";

    setTimeout(() => {
        divAlert.style.visibility = "hidden";
    }, 1500);

    container.appendChild(divAlert);
}