import clientPromise from '../lib/mongodb'

export const getPosts = async () => {
  const client = await clientPromise
  const db = client.db("database")
  const collection = db.collection("coffee")
  const post = await collection.find({"typename": "post"}).toArray();
  return JSON.parse(JSON.stringify(post))
};

export const getCategories = async () => {
  const client = await clientPromise
  const db = client.db("database")
  const collection = db.collection("coffee")
  const categories = await collection.find({"typename": "category"}).toArray();
  return JSON.parse(JSON.stringify(categories))
};

export const getPost = async (slug) => {
  const client = await clientPromise
  const db = client.db("database")
  const collection = db.collection("coffee")
  const post = await collection.findOne({"slug": slug});
  return JSON.parse(JSON.stringify(post))
};

export const getCategoryPosts = async (slug) => {
  const client = await clientPromise
  const db = client.db("database")
  const collection = db.collection("coffee")
  const categories = await collection.find({"typename": "post", "categories": slug}).toArray();
  return JSON.parse(JSON.stringify(categories))
};