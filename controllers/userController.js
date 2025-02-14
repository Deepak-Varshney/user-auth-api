import User from '../models/userModel.js';

// Search for a user by username or email (requires authentication)
export const getUser = async (req, res) => {
  try {
    const { username, email } = req.query;
    
    let user;
    if (username) {
      user = await User.findOne({ username }).select('-password');
    } else if (email) {
      user = await User.findOne({ email }).select('-password');
    } else {
      return res.status(400).json({ message: 'Please provide a username or email to search' });
    }
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
