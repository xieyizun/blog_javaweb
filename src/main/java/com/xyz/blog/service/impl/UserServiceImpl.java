package com.xyz.blog.service.impl;

import javax.annotation.Resource;  

import org.springframework.stereotype.Service;  
  
import com.xyz.blog.dao.UserDao;  
import com.xyz.blog.pojo.User;  
import com.xyz.blog.service.UserService;  
  
@Service("userService")  
public class UserServiceImpl implements UserService {  
    @Resource  
    private UserDao userDao;  
    @Override  
    public User getUserById(int userId) {  
        // TODO Auto-generated method stub  
        return this.userDao.selectByPrimaryKey(userId);  
    }
}  