package com.example.college;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CollegeController {

	@Autowired
	CollegePlayerRepository repository;

	@RequestMapping("/collegeplayer")
	@CrossOrigin(origins = "http://localhost:3000")
	public Iterable<CollegePlayer> getContacts() {
		return repository.findAll();
	}

	@PostMapping(value = "/addCollegeStudent")
	public String addCollegePlayer(CollegePlayer Collegeplayer, Model model) {
		model.addAttribute("Collegeplayer", Collegeplayer);
		repository.save(Collegeplayer);
		return "Your data is Submited";

	}

	@GetMapping("/collegeplaye/{id}")
	public String deleteCollegeplayer(@PathVariable int id) {
		repository.deleteById(id);
		return "data is deleted";
	}

	/*@GetMapping("/collegeplayer/{playerid}")
	public List<CollegePlayer> getplayer(@PathVariable String playerid) {
		return repository.findByplayerid(playerid);
	}*/

}
