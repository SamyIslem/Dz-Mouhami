
import React, { useState } from 'react';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import avatar from '../../../assets/lawyer/useravatar.png';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const Articles = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Introduction to Family Law',
      date: '2022-03-15',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      modified: true,
      comments: [
        { id: 1, text: 'Great article!', username: 'user1', avatar: avatar },
        { id: 3, text: 'so bad!', username: 'user2', avatar: avatar }
      ],
      likes: 10,
    },
    // Add more articles as needed
  ]);

  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
  });

  const [editMode, setEditMode] = useState(null);

  const handleNewArticleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleAddArticle = () => {
    const newArticleWithDefaults = {
      id: articles.length + 1,
      date: new Date().toLocaleDateString(),
      modified: false,
      comments: [],
      likes: 0,
      ...newArticle,
    };

    setArticles((prevArticles) => [...prevArticles, newArticleWithDefaults]);
    setNewArticle({ title: '', content: '' });
  };

  const handleDeleteArticle = (articleId) => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== articleId));
    setEditMode(null);
  };

  const handleDeleteComment = (articleId, commentId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            comments: article.comments.filter((comment) => comment.id !== commentId),
          };
        }
        return article;
      })
    );
  };

  const handleEditArticle = (articleId) => {
    setEditMode(articleId);
  };

  const handleUpdateArticle = (articleId, updatedData) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId ? { ...article, ...updatedData, modified: true } : article
      )
    );
    
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" mx-auto p-4 bg-white rounded shadow-md mt-8 relative">
      <div className='flex items-center justify-between'>
        <h1 className="text-2xl font-bold mb-4">My Articles</h1>
        <button onClick={handleOpenModal} className='flex flex-row items-center justify-center gap-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          <AddCircleOutlinedIcon/>
          <span>Add article</span>
        </button>
        
      </div>

      {isModalOpen && (
        <div className="absolute w-3/4 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 border">
            <h1 className="text-xl font-bold mb-4">Add New Article</h1>
            <form>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={newArticle.title}
            onChange={handleNewArticleChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Content:
          <textarea
            name="content"
            value={newArticle.content}
            onChange={handleNewArticleChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
              <button onClick={handleAddArticle}  className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Save
              </button>
              <button type="button" onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {articles.map((article) => (
        <div key={article.id} className="mb-6 border-b pb-4">
          {editMode === article.id ? (
            <div>
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  onChange={(e) =>
                    handleUpdateArticle(article.id, { title: e.target.value })
                  }
                  className="border border-gray-300 px-2 py-1 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Content:
                <textarea
                  name="content"
                  value={article.content}
                  onChange={(e) =>
                    handleUpdateArticle(article.id, { content: e.target.value })
                  }
                  className="border border-gray-300 px-2 py-1 w-full mt-1"
                />
              </label>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 mb-2"> {article.date}</p>
              {article.modified && (
                <span className="text-sm text-[#757575]">( Modified )</span>
              )}
              
              <p className="text-gray-700 text-lg mb-2">{article.content}</p>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <span className="text-[#4299E1] flex gap-2 items-center justify-center  font-bold py-2 px-4 rounded mt-2 cursor-pointer">
            <ThumbUpOffAltOutlinedIcon/> {article.likes} 
            </span>
            {editMode !== article.id ? (
              <button
                onClick={() => handleEditArticle(article.id)}
                className="bg-white hover:text-bg-blue-600 text-[#4299E1] font-bold py-2 px-4 rounded mt-2 cursor-pointer"
              >
                <EditOutlinedIcon/>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleUpdateArticle(article.id, { modified: true });
                  setEditMode(null);
                }}
                className="text-white  bg-green-500 font-bold py-2 px-4 rounded mt-2 cursor-pointer"
              >
                Save
              </button>
            )}
            <button
              onClick={() =>  handleDeleteArticle(article.id)}
              className="bg-white hover:text-bg-red-600 text-[#e44c4c] font-bold py-2 px-4 rounded mt-2 cursor-pointer "
            >
              <DeleteOutlineTwoToneIcon/>
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center  gap-4 ">
              <ChatBubbleOutlineOutlinedIcon/>
            <h3 className="text-xl font-semibold   mb-2">Comments</h3>
            </div>
            {article.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center  mb-2 justify-between pr-12"
              >
                <div className='flex items-center gap-4'>
                <img src={comment.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                <p className="text-gray-700 text-lg mb-2">{comment.text}</p>
              </div>
                <button
                  onClick={() =>  handleDeleteArticle(article.id)}
                  className=" hover:text-bg-red-600 text-[#e44c4c] font-bold py-2 px-4 rounded mt-2 cursor-pointer"
                >
                  <DeleteOutlineTwoToneIcon/>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Add New Article</h2>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={newArticle.title}
            onChange={handleNewArticleChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Content:
          <textarea
            name="content"
            value={newArticle.content}
            onChange={handleNewArticleChange}
            className="border border-gray-300 px-2 py-1 w-full mt-1"
          />
        </label>

        <button onClick={handleAddArticle} className='flex flex-row items-center justify-center gap-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          <AddCircleOutlinedIcon/>
          <span>Add article</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
