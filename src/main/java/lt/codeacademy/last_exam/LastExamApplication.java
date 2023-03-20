package lt.codeacademy.last_exam;

import lt.codeacademy.last_exam.services.*;
import lt.codeacademy.last_exam.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class LastExamApplication {
	private static final int TEST_PLAYER_COUNT = 10;
	@Autowired
	private PlayerService playerService;
	public static void main(String[] args) {
		SpringApplication.run(LastExamApplication.class, args);
	}
	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {

		testPlayers();
	}
	private void testPlayers() {

		this.playerService.savePlayerList(generatePlayers(TEST_PLAYER_COUNT));
	}
	private List<Player> generatePlayers(int TEST_PLAYER_COUNT) {
		List<Player> players = new ArrayList<>();
		LocalDate today = LocalDate.now();
		for (int i = 0; i < TEST_PLAYER_COUNT; i++) {
			Player player = new Player();
			player.setFirstname(String.format("firstname-%s", i+1));
			player.setLastname(String.format("lastname-%s", i+1));
			player.setEmail(String.format("email-%s@exam.lt", i+1));
			player.setPersonalCode(String.format("3%s0101000%s",99-i*2 , i+1));
			player.setChessStartDate(today.minusYears(i));
			players.add(player);
		}
		return players;
	}
}