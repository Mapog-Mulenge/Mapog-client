import React, { useState, useEffect } from "react";
import axios from "axios";

const PageManagement = () => {
  const [pages, setPages] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", slug: "" });
  const [editingSlug, setEditingSlug] = useState(null);

  const fetchPages = async () => {
    try {
      const response = await axios.get("/api/pages");
      setPages(response.data);
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSlug) {
        await axios.put(`/api/pages/${editingSlug}`, form);
      } else {
        await axios.post("/api/pages", form);
      }
      fetchPages();
      setForm({ title: "", content: "", slug: "" });
      setEditingSlug(null);
    } catch (error) {
      console.error("Error saving page:", error);
    }
  };

  const handleEdit = (page) => {
    setForm(page);
    setEditingSlug(page.slug);
  };

  const handleDelete = async (slug) => {
    try {
      await axios.delete(`/api/pages/${slug}`);
      fetchPages();
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Page Management</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="border p-2 w-full mb-2"
          required
          disabled={!!editingSlug}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border p-2 w-full mb-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingSlug ? "Update Page" : "Create Page"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Slug</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.slug} className="hover:bg-gray-50">
                <td className="p-2 border">{page.title}</td>
                <td className="p-2 border">{page.slug}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(page)}
                    className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(page.slug)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageManagement;
