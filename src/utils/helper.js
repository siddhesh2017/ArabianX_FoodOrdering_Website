/*  //Helper Js makes our code ->
* Maintainable
* Readable
* Testable
* Modular
* Reusable
* Hook's are also used for this same reason
*/

export function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }