import React, { useState, useEffect } from 'react'; // Import React and required hooks
import '../App.css'; // Import CSS file for styling
import html2pdf from 'html2pdf.js';
import logo from "./logo.png"

function Home() { // Declare the functional component App
  const [formData, setFormData] = useState({ // Declare formData state using useState hook
    name: '',
    mobile: '',
    email: '',
    fatherName: '',
    dob: '',
    age: '',
    address: '',
    height: '',
    weight: '',
    planNumber: '',
    doc: '',
    sumassured: '',
    identityMark: '',
    fatherage: '',
    fatherdeath: '',
    motherage: '',
    motherdeath: '',
    sistersnumber: '',
    sistersage: '',
    sistersliving: '',
    sistersdeath: '',
    brothersnumber: '',
    brothersage: '',
    brothersliving: '',
    brothersdeath: '',
    wifeage: '',
    wifedeath: '',
    childrennumber: '',
    childrenage: '',
    childrenliving: '',
    childrendeath: '',

  });
  const [submissions, setSubmissions] = useState([]); // Declare submissions state using useState hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully.');
        // setFormData(initialFormData); // Reset form fields after submission
        fetchSubmissions(); // Fetch updated submissions data
        // generatePDF();
      } else {
        console.error('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    const content = `
    <div style="font-family: Arial, sans-serif; padding: 10px; ">
      <h1 style="color: red; font-size: 1.5rem; margin-bottom: 1rem;">${formData.name} Details</h1>
      <ol style="list-style-type: decimal; margin-left: 20px; font-size: 1rem; padding: 10px;">
        <li style="margin-bottom: 2rem;">Father's Name: ${formData.fatherName}</li>
        <li style="margin-bottom: 2rem;">Mobile: ${formData.mobile}</li>
        <li style="margin-bottom: 2rem;">Email: ${formData.email}</li>
        <li style="margin-bottom: 2rem;">Date of Birth: ${formData.dob}</li>
        <li style="margin-bottom: 2rem;">Age: ${formData.age}</li>
        <li style="margin-bottom: 2rem;">Address: ${formData.address}</li>
        <li style="margin-bottom: 2rem;">Height: ${formData.height}</li>
        <li style="margin-bottom: 2rem;">Weight: ${formData.weight}</li>
        <li style="margin-bottom: 2rem;">Plan & Term: ${formData.planNumber}</li>
        <li style="margin-bottom: 2rem;">Plan & Term: ${formData.doc}</li>
        <li style="margin-bottom: 2rem;">Sum Assured: ${formData.sumassured}</li>
        <li style="margin-bottom: 0rem;">Identity Mark: ${formData.identityMark}</li>
        </ol>
        <h2>Family History</h2>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Father's Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death And Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.fatherage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.fatherdeath}</td>
        </tr>
        </table>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Mother's Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death And Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.motherage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.motherdeath}</td>
        </tr>
        </table>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Sisters </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Living </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death & Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.sistersnumber}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.sistersage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.sistersliving}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.sistersdeath}</td>
        </tr>
        </table>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Brothes </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Living </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death & Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.brothersnumber}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.brothersage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.brothersliving}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.brothersdeath}</td>
        </tr>
        </table>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Spouse Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death & Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.wifeage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.wifedeath}</td>
        </tr>
        </table>
        <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;" >Childrens </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Age </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Living </th>
        <th style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">Death & Reason </th>
        </tr>
        <tr style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.childrennumber}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.childrenage}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.childrenliving}</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 2px;width: 10%;">${formData.childrendeath}</td>
        </tr>
        </table>    
    </div>
  `;


    const opt = {
      margin: 10,
      filename: `${formData.name}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const element = document.createElement('div');
    element.innerHTML = content;

    html2pdf().from(element).set(opt).save();
  };


  const fetchSubmissions = async () => {
    try {
      const response = await fetch('http://localhost:8000/submissions');
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    setFormData((prevData) => ({ ...prevData, [name]: capitalizedValue }));

  };
  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  return ( // JSX code representing the component's UI
    <div className="Home">
      <header>
        <img className='logo' src={logo}></img>
        <h1>Client Data-Management</h1>
      </header>
      <main>
        <div className='pdf-content-container'>
          <div className='pdf-content-1'>
            <form onSubmit={handleSubmit} >
            <h1>A-Personal Information</h1>
              <div class="form-group">
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Father's Name:
                  <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Mobile:
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleEmailChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Date Of Birth:
                  <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Age:
                  <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Address:
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Height:
                  <input type="number" name="height" value={formData.height} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Weight:
                  <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Plan & Term:
                  <input type="text" name="planNumber" value={formData.planNumber} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Date Of Commencment:
                  <input type="date" name="doc" value={formData.doc} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Sum Assured:
                  <input type="number" name="sumassured" value={formData.sumassured} onChange={handleInputChange} />
                </label></div>
              <div class="form-group">
                <label>
                  Identity Mark:
                  <input type="text" name="identityMark" value={formData.identityMark} onChange={handleInputChange} />
                </label></div>

            </form>
          </div>



          <div className='pdf-content-2'>
            <form onSubmit={handleSubmit} >
            <h1>B-Family History</h1>
           
              <div class="form-group-1">
                <label>
                  Father's Age
                  <input type="number" name="fatherage" value={formData.fatherage} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Father's Death and Reason
                  <input type="text" name="fatherdeath" value={formData.fatherdeath} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Mother's Age
                  <input type="number" name="motherage" value={formData.motherage} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Mother's Death and Reason
                  <input type="text" name="motherdeath" value={formData.motherdeath} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Sister
                  <input type="number" name="sistersnumber" value={formData.sistersnumber} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Sister's Age
                  <input type="text" name="sistersage" value={formData.sistersage} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Living
                  <input type="number" name="sistersliving" value={formData.sistersliving} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Death & Reason
                  <input type="text" name="sistersdeath" value={formData.sistersdeath} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Brother
                  <input type="number" name="brothersnumber" value={formData.brothersnumber} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Brothers Age
                  <input type="text" name="brothersage" value={formData.brothersage} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Living
                  <input type="number" name="brothersliving" value={formData.brothersliving} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Death & Reason
                  <input type="text" name="brothersdeath" value={formData.brothersdeath} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Spouse's Age
                  <input type="number" name="wifeage" value={formData.wifeage} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Father's Death and Reason
                  <input type="text" name="wifedeath" value={formData.wifedeath} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Children
                  <input type="number" name="childrennumber" value={formData.childrennumber} onChange={handleInputChange} />
                </label></div>
              <div class="form-group-1">
                <label>
                  Children's Age
                  <input type="text" name="childrenage" value={formData.childrenage} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Living
                  <input type="number" name="childrenliving" value={formData.childrenliving} onChange={handleInputChange} />
                </label>
              </div>
              <div class="form-group-1">
                <label>
                  Death & Reason
                  <input type="text" name="childrendeath" value={formData.childrendeath} onChange={handleInputChange} />
                </label>
              </div>

            </form>
          </div>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="center-button-container">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>

        <div className="submission-list">
          <h2>Submissions</h2>
          <ul>
            {submissions.map((submission, index) => (
              <li key={index} className="submission-item">
                <p>Name: {submission.name}</p>
                <p>Email: {submission.fatherName}</p>
                <p>Mobile: {submission.mobile}</p>
                <p>email: {submission.email}</p>
                <p>Dob: {submission.dob}</p>
                <p>Age: {submission.age}</p>
                <p>Address: {submission.address}</p>
                <p>Height: {submission.height}</p>
                <p>Weight: {submission.weight}</p>
                <p>Plan & Term: {submission.planNumber}</p>
                <p>Sum Assured: {submission.sumassured}</p>
                <p>Identity Mark: {submission.identityMark}</p>
                <h2>Family History</h2>
                <table>
                  <tr>
                    <th>Father's Age </th>
                    <th>Death And Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.fatherage}</td>
                    <td>{submission.fatherdeath}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Mother's Age </th>
                    <th>Death And Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.motherage}</td>
                    <td>{submission.motherdeath}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Sisters </th>
                    <th>Age </th>
                    <th>Living </th>
                    <th>Death & Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.sistersnumber}</td>
                    <td>{submission.sistersage}</td>
                    <td>{submission.sistersliving}</td>
                    <td>{submission.sistersdeath}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Brothes </th>
                    <th>Age </th>
                    <th>Living </th>
                    <th>Death & Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.brothersnumber}</td>
                    <td>{submission.brothersage}</td>
                    <td>{submission.brothersliving}</td>
                    <td>{submission.brothersdeath}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th >Spouse Age </th>
                    <th>Death & Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.wifeage}</td>
                    <td>{submission.wifedeath}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th >Childrens </th>
                    <th>Age </th>
                    <th>Living </th>
                    <th>Death & Reason </th>
                  </tr>
                  <tr>
                    <td>{submission.childrennumber}</td>
                    <td>{submission.childrenage}</td>
                    <td>{submission.childrenliving}</td>
                    <td>{submission.childrendeath}</td>
                  </tr>
                </table>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home; // Export the App component
