function myfunc(callback){
 setTimeout(function(){
  console.log(‘first’);
},2000);
 callback();
}
function callback(){
 console.log(‘second’);
};
myfunc(callback);


function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
