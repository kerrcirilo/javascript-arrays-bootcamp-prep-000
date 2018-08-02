var chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles',]

function addElementToBeginningOfArray(fuck, element) {
 return [element, ...fuck];

}

function destructivelyAddElementToBeginningOfArray(fuck, element){
   fuck.unshift(element); 
   return fuck;
}

function destructivelyAddElementToEndOfArray(fuck, element){
  fuck.push(element);
  return fuck;
}

function addElementToEndOfArray(fuck, element){
return  [...fuck, element];

}

function accessElementInArray(array, index){
return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
}