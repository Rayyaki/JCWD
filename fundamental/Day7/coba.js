let arr = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
   ];
   let arr2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
   ];
   const mergeArr = (arr1, arr2) => {
    arr2.map((v) => {
     //ada ga hasil find dari arr1. dimana val.name == v.name
     !arr1.find((val) => {
      return val.name == v.name && val.email == v.email;
     })
      ? arr1.push(v)
      : null;
    });
    return arr1;
   };
   
   console.log(mergeArr(arr, arr2));