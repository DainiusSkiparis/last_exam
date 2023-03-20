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

    public Player getPlayerById(Long id) {
        Optional<Player> player = this.playerRepository.findById(id);

        if (!player.isPresent()) {
            return null;
        }

        return player.get();
    }
    public void addPlayer(Player player) {
        this.playerRepository.saveAndFlush(player);
    }
    public void savePlayerList(List<Player> players) {
        this.playerRepository.saveAllAndFlush(players);
    }
    public List<Player> getAllPlayers() {
        return this.playerRepository.findAll();
    }
    public void deletePlayerById(Long id) {
        this.playerRepository.deleteById(id);
    }
    public void editPlayerById(Long id, Player player) {
        Optional<Player> oldPlayerOptional = playerRepository.findById(id);

        if (!oldPlayerOptional.isPresent()) {
            return;
        }

        Player oldPlayer = oldPlayerOptional.get();

        if (player.getFirstname() != null && !oldPlayer.getFirstname().equals(player.getFirstname())){
            oldPlayer.setFirstname(player.getFirstname());
        }
        if (player.getLastname() != null && !oldPlayer.getLastname().equals(player.getLastname())){
            oldPlayer.setLastname(player.getLastname());
        }
        if (player.getEmail() != null && !oldPlayer.getEmail().equals(player.getEmail())){
            oldPlayer.setEmail(player.getEmail());
        }
        if (player.getPersonalCode() != null && !oldPlayer.getPersonalCode().equals(player.getPersonalCode())){
            oldPlayer.setPersonalCode(player.getPersonalCode());
        }
        if (player.getChessStartDate() != null && !oldPlayer.getChessStartDate().equals(player.getChessStartDate())){
            oldPlayer.setChessStartDate(player.getChessStartDate());
        }

        playerRepository.saveAndFlush(oldPlayer);
    }
}
