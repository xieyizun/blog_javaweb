/**
 * Copyright 2017 xieyz3
 * @version blog V1.0.0, 2017年4月23日
 */
package com.xyz.blog.service;

import java.util.List;

import com.xyz.blog.model.User; 

public interface UserService {
	public User getUserById(Long userId); 
	public int saveUser(User user);
	public List<User> getUserList();
}