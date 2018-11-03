package com.example.college;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CollegePlayer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String playerid;
	private String collegeid;
	private int year;
	
	public CollegePlayer() {
		
	}

	public CollegePlayer(String PlayerID, String CollegeID, int year) {
		this.playerid = PlayerID;
		this.collegeid = CollegeID;
		this.year = year;
	}

	public String getPlayerID() {
		return playerid;
	}

	public void setPlayerID(String playerID) {
		playerid = playerID;
	}

	public String getCollegeID() {
		return collegeid;
	}

	public void setCollegeID(String collegeID) {
		collegeid = collegeID;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

}
