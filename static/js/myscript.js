console.log('Can do following changes here in js file')

const searchfun = () =>{

    let filter = document.getElementById('myInput').value.toUpperCase();
    //console.log(filter)
    // let Table= document.getElementById('myTable');
    // let myTable= Table.getElementsByTagName('tbody');
    // let tr=myTable.getElementsByTagName('tr');

    let tr= document.querySelectorAll( '#myTable  tbody tr ');

    
    for(var i =0 ;i<tr.length;i++)
    {
        let td=tr[i].getElementsByTagName('td')[0];   //To get Title
        let td2=tr[i].getElementsByTagName('td')[1];   //To get Description
        if(td)
        {
            let textValue = td.textContent || td.innerHTML;
            let textValue2=td2.textContent || td2.innerHTML;
       
             if(textValue.toUpperCase().indexOf(filter) > -1 ||   textValue2.toUpperCase().indexOf(filter) > -1 )    // if the character matches
             {
                tr[i].style.display="";
                tr[i].style.backgroundColor="lightyellow";
             }
             else
             tr[i].style.display="none";
    
        }
    
    }
    
    
    
    }