document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#submissionsTable tbody');
  
    async function fetchSubmissions() {
      tableBody.innerHTML = ''; // Clear table before adding
      try {
        const response = await fetch('http://localhost:5000/api/submissions');
        const submissions = await response.json();
  
        submissions.forEach(submission => {
          const row = document.createElement('tr');
  
          row.innerHTML = `
            <td>${submission.name}</td>
            <td>${submission.age}</td>
            <td>${submission.budget}</td>
            <td>
            <button onclick="editSubmission('${submission._id}', '${submission.name}', '${submission.age}', '${submission.budget}')">Edit</button>
            <button onclick="deleteSubmission('${submission._id}')">Delete</button>
            </td>
          `;
  
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    }
  
    fetchSubmissions(); // Load submissions initially
  
    // Delete function
    window.deleteSubmission = async (id) => {
      if (confirm('Are you sure you want to delete this submission?')) {
        try {
          await fetch(`http://localhost:5000/api/submissions/${id}`, {
            method: 'DELETE'
          });
          fetchSubmissions(); // Reload after deleting
        } catch (error) {
          console.error('Error deleting submission:', error);
        }
      }
    };


    // Edit function
window.editSubmission = async (id, currentName, currentAge, currentBudget) => {
    const newName = prompt('Enter new name:', currentName);
    const newAge = prompt('Enter new age:', currentAge);
    const newBudget = prompt('Enter new budget:', currentBudget);
  
    if (newName && newAge && newBudget) {
      try {
        await fetch(`http://localhost:5000/api/submissions/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newName,
            age: newAge,
            budget: newBudget
          })
        });
        fetchSubmissions(); // Reload table after editing
      } catch (error) {
        console.error('Error updating submission:', error);
      }
    }
  };
  














  });
  