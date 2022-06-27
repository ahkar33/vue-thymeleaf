package com.ace.vueboot.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ace.vueboot.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    @Modifying
    @Transactional
    @Query(value = "update user set user_name=?1, user_address=?2 where user_id=?3", nativeQuery = true)
    int updateUserById(String userName, String userAddress, Long userId);
}
