/**
 * Copyright 2017 xieyz3
 * @version blog V1.0.0, 2017年4月23日
 */

package com.xyz.blog.controller;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.xyz.blog.model.User;
import com.xyz.blog.service.UserService;

@RestController
@RequestMapping(value="/users")
public class UserController {
	@Resource
	private UserService userService;
	
	@RequestMapping(method=RequestMethod.GET, produces="application/json; charset=utf-8")
	public ResponseEntity<Map<String, Object>> getUserList() {
		Map<String, Object> rsMap = new HashMap<String, Object>();
		List<User> users = this.userService.getUserList();
		if (null != users) {
			rsMap.put("userList", users);
			return new ResponseEntity<Map<String, Object>>(rsMap, HttpStatus.OK);
		} else {
			return new ResponseEntity<Map<String, Object>>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes="application/json; charset=utf-8")
	public ResponseEntity<Integer> saveUser(@RequestBody User user, UriComponentsBuilder ucb) {
		int userId = userService.saveUser(user);
		
		HttpHeaders headers = new HttpHeaders();
		URI showUserUri = ucb.path("/users").path(String.valueOf(userId)).build().toUri();
		headers.setLocation(showUserUri);
		
		ResponseEntity<Integer> response = new ResponseEntity<Integer>(userId, headers, HttpStatus.CREATED);
		return response;
	}
	
	@RequestMapping(value="/{userId}", method=RequestMethod.GET, produces="application/json; charset=utf-8")
	public ResponseEntity<User> show(@PathVariable Long userId){
		System.out.println(userId);
		
		User user = this.userService.getUserById(userId);
		if (null == user) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
	}
	
}
