import data from '../data'
// api/posts

export default function handler(req, res) {
    // Posts is destructured from data.js
    
    const { Posts } = data
    if(Posts) return res.status(200).json(Posts)
    return res.status(404).json({ error: "Data not found" })
  }