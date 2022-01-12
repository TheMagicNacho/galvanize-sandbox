var badge = document.getElementsByClassName('badge');
  
/* console.log(badge.length); */

  for (let i = 0; i < badge.length; i++){

    var thisBadge = badge[i];
  
    var result = parseInt(thisBadge.innerHTML);
  console.log(result);
  
  if(result <= 5)
  {
      console.log("Add Class: Badge-Danger");
    thisBadge.setAttribute('class', 'badge-danger');
  }
      else if (result > 5 && result <= 10)
  {
      console.log("Add Class: Badge-Secondary");
    thisBadge.setAttribute('class', 'badge-secondary');
  }
  else
  {
      console.log("Add Class: Badge-Danger (exception)");
    thisBadge.setAttribute('class', 'badge-danger');
  }

}