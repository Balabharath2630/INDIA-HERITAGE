import "./Forum.css";

function Forum() {
  return (
    <div className="forum-page">

      {/* Header */}
      <div className="forum-header">
        <h1>Community Hub</h1>
        <p>
          Share your travels, ask questions about history, or simply connect with fellow
          culture lovers from around the globe.
        </p>
      </div>

      {/* Start Conversation */}
      <div className="conversation-box">
        <h3>Start a Conversation</h3>

        <textarea
          placeholder="What's your latest discovery? Or ask a question about Indian heritage..."
        ></textarea>

        <div className="conversation-actions">
          <div>
            <button className="light-btn">📷 Add Photo</button>
            <button className="light-btn">🏛 Tag Monument</button>
          </div>
          <button className="primary-btn">Post Thread</button>
        </div>
      </div>

      {/* Discussions */}
      <div className="discussion-header">
        <h3>Recent Discussions</h3>
        <div className="tabs">
          <span className="active">Trending</span>
          <span>Latest</span>
          <span>Top</span>
        </div>
      </div>

      {/* Discussion Card */}
      <div className="discussion-card">
        <div className="user-info">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
          />
          <div>
            <h4>Priya Sharma <span className="badge">Cultural Enthusiast</span></h4>
            <p>Almost 2 years ago</p>
          </div>
        </div>

        <p className="discussion-text">
          The sunrise at Taj Mahal is a once-in-a-lifetime experience!
        </p>

        <div className="discussion-actions">
          <span>👍 24</span>
          <span>💬 6</span>
          <span>🔗 Share</span>
        </div>
      </div>

      {/* Load More */}
      <div className="load-more">
        <button>Load More Discussions</button>
      </div>

    </div>
  );
}

export default Forum;