package lt.codeacademy.last_exam.converters;

import lt.codeacademy.last_exam.dto.*;
import lt.codeacademy.last_exam.entities.Player;


import java.util.ArrayList;
import java.util.List;

public abstract class PlayerConverter {

    public static Player convertAddPlayerDtoToEntity(AddPlayerDTO playerDTO) {
        Player player = null;
        if (playerDTO != null) {
            player = new Player();
            player.setFirstname(playerDTO.getFirstname());
            player.setLastname(playerDTO.getLastname());
            player.setEmail(playerDTO.getEmail());
            player.setPersonalCode(playerDTO.getPersonalCode());
            player.setChessStartDate(playerDTO.getChessStartDate());
        }
        return player;
    }

    public static PlayerDTO convertPlayerEntityToDto(Player player) {
        PlayerDTO playerDTO = null;
        if (player != null) {
            playerDTO = new PlayerDTO();
            playerDTO.setId(player.getId());
            playerDTO.setFirstname(player.getFirstname());
            playerDTO.setLastname(player.getLastname());
            playerDTO.setEmail(player.getEmail());
            playerDTO.setPersonalCode(player.getPersonalCode());
            playerDTO.setChessStartDate(player.getChessStartDate());
        }
        return playerDTO;
    }

    public static List<PlayerDTO> convertPlayerEntityListToDto(List<Player> playerList) {
        List<PlayerDTO> playerDTOList = null;
        for (Player p : playerList) {
            if (playerDTOList == null) {
                playerDTOList = new ArrayList<>();
            }
            playerDTOList.add(PlayerConverter.convertPlayerEntityToDto(p));
        }
        return playerDTOList;
    }

}
