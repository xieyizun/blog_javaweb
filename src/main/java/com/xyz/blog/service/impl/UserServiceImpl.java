/**
 * Copyright 2017 xieyz3
 * @version blog V1.0.0, 2017年4月23日
 */
package com.xyz.blog.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;  

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xyz.blog.dao.UserDao;
import com.xyz.blog.model.User;
import com.xyz.blog.service.UserService;  
  
@Service("userService") 
@Transactional(rollbackFor=Exception.class)
public class UserServiceImpl implements UserService {  
    @Resource  
    private UserDao userDao;  
    @Override  
    public User getUserById(Long userId) {  
        return this.userDao.query(userId);  
    }
    
	@Override
	public int saveUser(User user) {
		this.userDao.saveUser(user);
		return user.getId();
	}

	@Override
	public List<User> getUserList() {
		return this.userDao.getUserList();
	}
}  