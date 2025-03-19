import { useEffect, useState } from 'react';
import React from 'react'

function ApiEffect(){
    const [data, setData] = useState({
        users: [],
        products: [],
        posts: [],
        orders: [],
        notifications: []
    });

    useEffect(()=>{
        fetch('https://mock-api.autobot.site/api/@nguyenhung204/testobs')
        .then(response => response.json())
        .then(json => setData(json))
    },[])
    

    return (
        <div style={{ padding: '20px' }}>
            <h1>API Data</h1>

            <section>
                <h2>Users</h2>
                {data.users && data.users.length > 0 ? (
                    <ul>
                        {data.users.map(user => (
                            <li key={user.id} style={{ margin: '10px 0' }}>
                                <strong>{user.name}</strong> ({user.email}) - 
                                Age: {user.age}, Role: {user.role}
                            </li>
                        ))}
                    </ul>
                ) : <p>No users found</p>}
            </section>

            <section>
                <h2>Products</h2>
                {data.products && data.products.length > 0 ? (
                    <ul>
                        {data.products.map(product => (
                            <li key={product.id} style={{ margin: '10px 0' }}>
                                <strong>{product.name}</strong> - 
                                ${(product.price / 1000000).toFixed(2)}M - 
                                Stock: {product.stock}, Category: {product.category}
                            </li>
                        ))}
                    </ul>
                ) : <p>No products found</p>}
            </section>

            <section>
                <h2>Posts</h2>
                {data.posts && data.posts.length > 0 ? (
                    <ul>
                        {data.posts.map(post => (
                            <li key={post.id} style={{ margin: '10px 0' }}>
                                <strong>{post.title}</strong>
                                <p>Author: {post.author}, Status: {post.published ? 'Published' : 'Draft'}</p>
                                <p>{post.content.substring(0, 50)}...</p>
                            </li>
                        ))}
                    </ul>
                ) : <p>No posts found</p>}
            </section>

            <section>
                <h2>Orders</h2>
                {data.orders && data.orders.length > 0 ? (
                    <ul>
                        {data.orders.map(order => (
                            <li key={order.orderId} style={{ margin: '10px 0' }}>
                                <strong>Order: {order.orderId}</strong>
                                <p>User ID: {order.userId}, Status: {order.status}</p>
                                <p>Total: ${(order.totalPrice / 1000000).toFixed(2)}M</p>
                                <p>Items: {order.items.length}</p>
                            </li>
                        ))}
                    </ul>
                ) : <p>No orders found</p>}
            </section>
        </div>
    );
}
export default ApiEffect