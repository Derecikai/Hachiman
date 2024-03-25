class ApiFeatures{

 constructor(query, queryString){
  this.query = query;
  this.queryString = queryString;
 }

 filter(){
  const queryObj = {...this.queryString};
   console.log("This is",queryObj);
  const excludeFields = ['page' , 'sort', 'limit' , 'fields'];
  excludeFields.forEach(el => delete queryObj[el]);

 //Advanced filtering
let queryStr = JSON.stringify(queryObj);
queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
console.log(JSON.parse(queryStr));

this.query.find(JSON.parse(queryStr))
//  let query =  Tour.find(JSON.parse(queryStr));

return this;
 }
 sort()
 {
    if(this.queryString.sort){
    const sortBy = this.queryString.sort.split(',').join(' ');
  console.log('Hi',sortBy);
   this.query = this.query.sort(sortBy);
    }
    else
    this.query = this.query.sort('__v');
  return this;
 }
 limitFields()
 {
   if(this.queryString.fields)
   {
    console.log("Fieldsadsa:",this.queryString.fields);
    const fields = this.queryString.fields.split(',').join(' ');
    this.query = this.query.select(fields);
   }
   else{
  this.query = this.query.select('-__v');
 }
   return this;
 }


}

module.exports = ApiFeatures;