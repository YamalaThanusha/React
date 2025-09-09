import React, { useState } from 'react';

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ roll: '', username: '', age: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }
    setForm({ roll: '', username: '', age: '' });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dynamic Table</h2>
      <div className="mb-4 space-x-2">
        <input
          name="roll"
          value={form.roll}
          onChange={handleChange}
          placeholder="Roll No"
          className="border px-2 py-1"
        />
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="border px-2 py-1"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="border px-2 py-1"
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Roll No</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{entry.roll}</td>
              <td className="border px-4 py-2">{entry.username}</td>
              <td className="border px-4 py-2">{entry.age}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-2">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
