import React, { useState } from 'react';

function App() {
  const initialData = ['alakh', 'kaler', 'harsh', 'google', 'apple', 'java', 'django'];
  const [data, setData] = useState(initialData);

  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
