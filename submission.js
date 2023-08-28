const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  // Define fields for submission
  // Example: name, email, data, etc.
  name: String,
  email: String,
  mobile: String,
  height: String,
  weight: String,
  identityMark: String,
  planNumber: String,
  familyHistory: String,
  name: String,
  mobile: String,
  email: String,
  fatherName: String,
  dob: String,
  age: String,
  address: String,
  height: String,
  weight: String,
  planNumber: String,
  doc:String,
  sumassured: String,
  identityMark: String,
  fatherage: String,
  fatherdeath:String,
  motherage:String,
  motherdeath:String,
  sistersnumber:String,
  sistersage:String,
  sistersliving:String,
  sistersdeath:String,
  brothersnumber:String,
  brothersage:String,
  brothersliving:String,
  brothersdeath:String,
  wifeage:String,
  wifedeath:String,
  childrennumber:String,
  childrenage:String,
  childrenliving:String,
  childrendeath:String,
  // Add other fields as needed
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
