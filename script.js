var timeNow =  moment().format('H');
      if (timeNow === "9"){
        document.querySelector('#nine').style.backgroundColor = "#78c5ee";
        document.querySelector('#ten').style.backgroundColor = "#bdf4e0";
        document.querySelector('#eleven').style.backgroundColor = "#bdf4e0";
        document.querySelector('#twelve').style.backgroundColor = "#bdf4e0";
        document.querySelector('#thirteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fourteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "10"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#78c5ee";
        document.querySelector('#eleven').style.backgroundColor = "#bdf4e0";
        document.querySelector('#twelve').style.backgroundColor = "#bdf4e0";
        document.querySelector('#thirteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fourteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "11"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#78c5ee";
        document.querySelector('#twelve').style.backgroundColor = "#bdf4e0";
        document.querySelector('#thirteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fourteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "12"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#78c5ee";
        document.querySelector('#thirteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fourteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "13"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#f6b2b2";
        document.querySelector('#thirteen').style.backgroundColor = "#78c5ee";
        document.querySelector('#fourteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "14"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#f6b2b2";
        document.querySelector('#thirteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fourteen').style.backgroundColor = "#78c5ee";
        document.querySelector('#fifteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "15"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#f6b2b2";
        document.querySelector('#thirteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fourteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fifteen').style.backgroundColor = "#78c5ee";
        document.querySelector('#sixteen').style.backgroundColor = "#bdf4e0";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "16"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#f6b2b2";
        document.querySelector('#thirteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fourteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fifteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#sixteen').style.backgroundColor = "#78c5ee";
        document.querySelector('#seventeen').style.backgroundColor = "#bdf4e0";
      }
      else if (timeNow === "17"){
        document.querySelector('#nine').style.backgroundColor = "#f6b2b2";
        document.querySelector('#ten').style.backgroundColor = "#f6b2b2";
        document.querySelector('#eleven').style.backgroundColor = "#f6b2b2";
        document.querySelector('#twelve').style.backgroundColor = "#f6b2b2";
        document.querySelector('#thirteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fourteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#fifteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#sixteen').style.backgroundColor = "#f6b2b2";
        document.querySelector('#seventeen').style.backgroundColor = "#78c5ee";
      }
      else{
        document.querySelector('#nine').style.backgroundColor = "white";
        document.querySelector('#ten').style.backgroundColor = "white";
        document.querySelector('#eleven').style.backgroundColor = "white";
        document.querySelector('#twelve').style.backgroundColor = "white";
        document.querySelector('#thirteen').style.backgroundColor = "white";
        document.querySelector('#fourteen').style.backgroundColor = "white";
        document.querySelector('#fifteen').style.backgroundColor = "white";
        document.querySelector('#sixteen').style.backgroundColor = "white";
        document.querySelector('#seventeen').style.backgroundColor = "white";
      }

      //checks if localStorage.tasks exists
      if(localStorage.getItem("tasks") === null)
      {
        var tasks = {nine: "", ten:"", eleven: "", twelve: "", thirteen: "", fourteen: "", fifteen: "", sixteen: "", seventeen: ""}

        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      
      // stores the current values of tasks object by retrieving it from localStorage tasks
      var currentTasks = JSON.parse(localStorage.getItem('tasks'));

      // Take the value for each time block from localStorage and add the value to the text input even after reloading the page
      document.querySelector('#nine').value = currentTasks.nine;
      document.querySelector('#ten').value = currentTasks.ten;
      document.querySelector('#eleven').value = currentTasks.eleven;
      document.querySelector('#twelve').value = currentTasks.twelve;
      document.querySelector('#thirteen').value = currentTasks.thirteen;
      document.querySelector('#fourteen').value = currentTasks.fourteen;
      document.querySelector('#fifteen').value = currentTasks.fifteen;
      document.querySelector('#sixteen').value = currentTasks.sixteen;
      document.querySelector('#seventeen').value = currentTasks.seventeen;
      

      function submitValue(){

        var buttonID = event.target.id;
        if(buttonID === "btnNine"){
          var tempValue = document.querySelector('#nine').value;
          currentTasks.nine = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else  if(buttonID === "btnTen"){
          var tempValue = document.querySelector('#ten').value;
          currentTasks.ten = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnEleven"){
          var tempValue = document.querySelector('#eleven').value;
          currentTasks.eleven = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnTwelve"){
          var tempValue = document.querySelector('#twelve').value;
          currentTasks.twelve = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnThirteen"){
          var tempValue = document.querySelector('#thirteen').value;
          currentTasks.thirteen = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnFourteen"){
          var tempValue = document.querySelector('#fourteen').value;
          currentTasks.fourteen = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnFifteen"){
          var tempValue = document.querySelector('#fifteen').value;
          currentTasks.fifteen = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnSixteen"){
          var tempValue = document.querySelector('#sixteen').value;
          currentTasks.sixteen = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
        else if(buttonID === "btnSeventeen"){
          var tempValue = document.querySelector('#seventeen').value;
          currentTasks.seventeen = tempValue
          localStorage.setItem('tasks', JSON.stringify(currentTasks));
          
        }
      }

      document.querySelector('#currentDay').innerHTML = `Today is ${moment().format('MMMM Do YYYY')}`;