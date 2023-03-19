package lt.codeacademy.last_exam.services;

import lombok.AllArgsConstructor;
import lt.codeacademy.last_exam.entities.*;
import lt.codeacademy.last_exam.repositories.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

//    public Player getPlayerById(Long id) {
//        Optional<Player> player = this.playerRepository.findById(id);
//
//        if (!player.isPresent()) {
//            return null;
//        }
//
//        return player.get();
//    }

    public void addPlayer(Player player) {
        this.playerRepository.saveAndFlush(player);
    }

    public void savePlayerList(List<Player> players) {
        this.playerRepository.saveAllAndFlush(players);
    }

    public List<Player> getAllPlayers() {
        return this.playerRepository.findAll();
}
}
