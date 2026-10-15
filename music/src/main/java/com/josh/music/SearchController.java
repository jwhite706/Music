package com.josh.music;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
public class SearchController {

    private final RestClient deezer = 
RestClient.create("https://api.deezer.com");

    @GetMapping("/api/search/artists")
    public String searchArtists(@RequestParam String q) {
        return deezer.get()
        .uri("/search/artist?q={q}", q)
        .retrieve()
        .body(String.class);
    }

}