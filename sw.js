        self.addEventListener("push", event => {
      const data = event.data ? event.data.text() : "Máme novou zprávu!";
      event.waitUntil(
        self.registration.showNotification("📢 Upozornění", {
          body: data,
          icon: "/icon.png"
        })
      );
    });
