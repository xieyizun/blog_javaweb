/**
 * Copyright 2017 xieyz3
 * @version blog V1.0.0, 2017年4月23日
 */

package com.xyz.blog.dao;

import java.util.List;
import java.util.Map;

import com.xyz.blog.model.User;

public interface UserDao {
	public List<User> getUserList();
	public User query(Long id);
    public int saveUser(User user);
    public void deleteUser(Map<String, Object> param);  
}