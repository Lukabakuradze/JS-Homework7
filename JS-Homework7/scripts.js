function UserFromServer() {
    let Info = new XMLHttpRequest();

    Info.addEventListener('load', function () {
        let List = this.responseText;
        let ListData = JSON.parse(List)

        console.log(ListData);

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = ListData.data[4].first_name + ' ' + ListData.data[4].last_name + ' ' +  ListData.data[4].email + ' ' + ListData.data[4].id;

        ul.appendChild(li)
        document.getElementById('Infoindiv').appendChild(ul)


    })

    Info.open('GET', 'https://reqres.in/api/users?page=2');
    Info.send();
}

UserFromServer();
