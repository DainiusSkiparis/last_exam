package lt.codeacademy.last_exam;

import lt.codeacademy.last_exam.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lt.codeacademy.last_exam.entities.*;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class LastExamApplication {

	@Autowired
	private PlayerService playerService;

	public static void main(String[] args) {
		SpringApplication.run(LastExamApplication.class, args);
	}


	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		testCase1();

	}

	private void testCase1() {
		this.playerService.savePlayerList(generatePlayers(5));
	}

	private List<Player> generatePlayers(int count) {
		List<Player> players = new ArrayList<>();
		for (int i = 0; i < count; i++) {
			Player player = new Player();
			player.setFirstname(String.format("firstname-%s", i));
			player.setLastname(String.format("lastname-%s", i));
			player.setEmail(String.format("email-%s@exam.lt", i));
			player.setPersonalCode(String.format("3990101000%s", i));
			player.setChessStartDate(LocalDate.now());
			players.add(player);
		}
		return players;
	}
}

