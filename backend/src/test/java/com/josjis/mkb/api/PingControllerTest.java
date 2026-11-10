package com.josjis.mkb.api;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

/** Memastikan aplikasi bisa start (memakai H2 lewat profil "test") dan endpoint dasar menjawab. */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class PingControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void pingReturnsOk() throws Exception {
        mvc.perform(get("/api/ping"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("ok"));
    }

    @Test
    void unknownEndpointReturns404() throws Exception {
        mvc.perform(get("/api/tidak-ada")).andExpect(status().isNotFound());
    }
}
