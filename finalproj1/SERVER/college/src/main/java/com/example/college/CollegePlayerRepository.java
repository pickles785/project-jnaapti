package com.example.college;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollegePlayerRepository extends JpaRepository<CollegePlayer, Integer> {

	void deleteByid(String playerID);

	List<CollegePlayer> findByplayerid(String playerid);

}
